# VoiceGram - React Native

🎙️ **Voice-to-Text Telegram with Personal Account Integration**

A modern React Native application that enables voice recording, speech-to-text conversion, and personal Telegram account messaging - eliminating the 403 errors from Bot API limitations.

## 🚀 Key Features

- **📱 Personal Telegram Account Integration** - Will use `react-native-tdlib` for personal account messaging instead of bot API
- **🎤 Modern Voice Recording** - Will use `expo-av` for modern audio recording
- **🗣️ Real-time Speech-to-Text** - Will use `expo-speech-recognition` for live transcription
- **🛠️ Modern Build Pipeline** - GitHub Actions CI/CD with automated APK generation
- **📱 Cross-Platform** - iOS, Android, and Web support

## 🛠️ Technical Stack

- **React Native:** 0.73.6
- **Android Target:** SDK 30-34 (Android 11-14)
- **Telegram:** react-native-tdlib (Personal Account API) - Coming Soon
- **Audio:** expo-av (Modern recording) - Coming Soon
- **Speech:** expo-speech-recognition (Real-time transcription) - Coming Soon

## 📋 Prerequisites

- Node.js 18+ 
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)
- Git
- Java 17 (for building)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd VoiceGram
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install iOS Dependencies (macOS only)
```bash
cd ios
pod install
cd ..
```

### 4. Run the App

#### Android
```bash
# Set JAVA_HOME to Java 17 (required for building)
export JAVA_HOME=/Users/yoni/Library/Java/JavaVirtualMachines/jbr-17.0.14/Contents/Home

npm run android
```

#### iOS (macOS only)
```bash
npm run ios
```

#### Web (optional)
```bash
npm run web
```

## 🔧 Configuration

### Android Configuration

The app is configured for:
- **Min SDK:** 30 (Android 11)
- **Target SDK:** 34 (Android 14)
- **Compile SDK:** 34 (Android 14)

To modify, edit `android/build.gradle`:
```gradle
buildscript {
    ext {
        buildToolsVersion = "34.0.0"
        minSdkVersion = 30  // Android 11
        compileSdkVersion = 34  // Android 14
        targetSdkVersion = 34  // Android 14
        ndkVersion = "25.1.8937393"
        kotlinVersion = "1.8.0"
    }
}
```

### Java Version Requirement

**Important:** This project requires Java 17 for building. If you have multiple Java versions installed, set JAVA_HOME before building:

```bash
export JAVA_HOME=/Users/yoni/Library/Java/JavaVirtualMachines/jbr-17.0.14/Contents/Home
```

Or install Java 17 if not available:
```bash
# On macOS with Homebrew
brew install openjdk@17
```

## 🚢 GitHub Actions CI/CD

The project includes automated builds via GitHub Actions:

### Trigger Builds
- **Automatic:** On push to `main` or `master` branches
- **Manual:** Via "workflow_dispatch" in GitHub Actions tab
- **Pull Requests:** On PRs to `main` or `master`

### Download APKs
1. Go to your GitHub repository
2. Click the "Actions" tab
3. Click on the completed "React Native Android Build" workflow
4. Download the APK from the "Artifacts" section:
   - `VoiceGram-debug-{version}` for testing
   - `VoiceGram-release-{version}` for production

### Build Artifacts
- **Debug APK:** Automatically built and uploaded
- **Release APK:** Built if keystore is configured
- **GitHub Releases:** Automatically created for non-PR builds

## 📱 App Permissions

The app will require the following permissions when features are implemented:
- **RECORD_AUDIO:** For voice recording functionality
- **POST_NOTIFICATIONS:** For notifications (Android 13+)
- **INTERNET:** For Telegram API communication

## 🏗️ Project Structure

```
VoiceGram/
├── .github/workflows/          # GitHub Actions CI/CD
│   └── rn-android-build.yml    # React Native Android build workflow
├── android/                    # Android native code
│   ├── app/                    # Android app module
│   ├── build.gradle            # Android build configuration
│   └── gradle/wrapper/         # Gradle wrapper configuration
├── ios/                        # iOS native code (macOS only)
├── App.tsx                     # Main React Native component
├── package.json                # Node dependencies
└── README.md                   # This file
```

## 🧪 Current Status

The project currently includes:
- **✅ Base React Native Setup:** React Native 0.73.6 configured
- **✅ Higher Android Versions:** SDK 30-34 (Android 11-14)
- **✅ GitHub Actions CI/CD:** Automated build pipeline
- **✅ Working Build:** Successfully builds debug APK
- **✅ Basic UI:** VoiceGram branding and feature overview

### Coming Soon
- Personal Telegram account integration (react-native-tdlib)
- Voice recording implementation (expo-av)
- Speech-to-text functionality (expo-speech-recognition)
- Message sending and receiving
- Real-time status updates

## 🐛 Troubleshooting

### Build Issues

**Java Version Problems:**
```bash
# Set JAVA_HOME to Java 17
export JAVA_HOME=/Users/yoni/Library/Java/JavaVirtualMachines/jbr-17.0.14/Contents/Home

# Clean build cache
cd android
./gradlew clean
cd ..

# Reinstall dependencies
rm -rf node_modules
npm install
```

**Gradle Issues:**
```bash
# Clean Gradle cache
cd android
./gradlew clean --no-daemon
```

### iOS Build Issues (macOS only)
```bash
# Clean iOS build
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Permission Issues
- Make sure to request permissions in the app using the appropriate buttons
- For Android, ensure permissions are granted in system settings

## 🔧 Build System Details

- **Gradle Version:** 8.8
- **Java Version:** 17 (Required)
- **Android Build Tools:** 34.0.0
- **Kotlin Version:** 1.8.0

## 📄 License

This project is part of the VoiceGram application suite.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using React Native 0.73.6 and GitHub Actions**