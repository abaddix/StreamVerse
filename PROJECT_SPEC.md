# StreamVerse IPTV

Replace the current project completely.

Build a native React Native IPTV application (NO WebView).

Requirements:

- React Native CLI
- Android first
- Native ExoPlayer (react-native-video)
- Stalker / Ministra Portal support

Features:

- Connect screen
    - Portal URL
    - MAC Address
    - Save credentials

- Stalker protocol
    - Handshake
    - Authentication
    - Get Profile
    - Get Genres
    - Get All Channels
    - Create Link
    - Refresh Token

- Home
    - Categories
    - Channels
    - Search
    - Favorites
    - Recently Watched

- Player
    - Native ExoPlayer
    - Fullscreen
    - Hardware Decoder
    - Channel switching
    - Buffering
    - Auto reconnect

Architecture:

src/
 api/
 services/
 components/
 navigation/
 screens/
 store/
 storage/
 theme/
 utils/
 types/

The repository currently contains only the initial skeleton.

Replace every incomplete file with production-quality code.

Generate every missing file.

Do not leave TODOs.

The final result must build successfully as an Android APK.