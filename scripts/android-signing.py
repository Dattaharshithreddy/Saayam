"""Make the generated Android project sign release builds with the private upload key.

Run after `expo prebuild` in CI. Reads nothing secret itself: the Gradle file is changed to take
the keystore path and passwords from environment variables at build time.
"""
import re
import sys

path = 'android/app/build.gradle'
src = open(path).read()

release_cfg = '''    signingConfigs {
        release {
            storeFile file(System.getenv("SAAYAM_KEYSTORE_PATH"))
            storePassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
            keyAlias System.getenv("ANDROID_KEY_ALIAS")
            keyPassword System.getenv("ANDROID_KEY_PASSWORD")
        }
'''
if 'signingConfigs {\n' not in src:
    sys.exit('signingConfigs block not found — Expo template changed; update scripts/android-signing.py')
src = src.replace('    signingConfigs {\n', release_cfg, 1)

# Inside buildTypes.release, switch from the debug key to the release key.
m = re.search(r'(\n\s+release \{(?:(?!\n\s+\w+ \{).)*?signingConfig )signingConfigs\.debug', src, re.S)
if not m:
    sys.exit('release buildType signingConfig not found — update scripts/android-signing.py')
src = src[: m.start()] + m.group(1) + 'signingConfigs.release' + src[m.end():]

open(path, 'w').write(src)
print('Release builds will be signed with the upload key.')
