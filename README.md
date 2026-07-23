# 🎙️ VoiceGram - React Native

Voice-to-Text Telegram app with personal account integration using React Native 0.72.12.

## 📱 Latest APK Download

**🔗 [Download Latest APK](https://github.com/yoni12ab/VoiceGram-RN/releases/download/v1.0.2-bccbf47/VoiceGram-v1.0.2-bccbf47-debug.apk)**

**Version:** v1.0.2-bccbf47 | **Platform:** Android (Debug) | **Status:** ✅ Ready to Install

### 🚀 Installation Instructions
1. Click the download link above
2. Enable "Install from unknown sources" on your Android device
3. Open the APK file to install VoiceGram
4. Grant permissions when prompted

---

## 🎯 Project Overview

VoiceGram is a React Native application that enables voice-to-text communication through Telegram personal account integration. The app uses free libraries without requiring AI tokens or paid services.

### ✨ Key Features
- 🎙️ Voice recording with free libraries
- 🗣️ Speech-to-text conversion without AI tokens  
- 📱 Personal Telegram account integration (not bot API)
- 🚀 No recurring costs or paid APIs
- 📲 Android 11+ support

### 🛠️ Technology Stack
- **React Native:** 0.72.12 (Fixed Metro file watching issues)
- **Android SDK:** 30-34 (Android 11-14)
- **Target SDK:** 34 (Android 14)
- **Build System:** Gradle 8.0.1
- **Java:** JDK 17

### 📦 Planned Libraries
- `react-native-tdlib` - Personal Telegram account integration
- `react-native-audio-recorder-player` - Voice recording
- `react-native-voice` - Speech-to-text conversion

---

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- Java JDK 17
- Android SDK with Android 11+ platform
- Android Studio with SDK tools

### Installation

```bash
# Clone the repository
git clone https://github.com/yoni12ab/VoiceGram-RN.git
cd VoiceGram-RN

# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios
```

---

## 📦 Building APK Locally

```bash
# Build debug APK
cd android
./gradlew assembleDebug

# APK location: android/app/build/outputs/apk/debug/app-debug.apk

# Build release APK (requires signing configuration)
./gradlew assembleRelease
```

---

## 🔄 CI/CD

The project uses GitHub Actions for automated APK generation on every push to the main branch. 

- **Workflow:** `.github/workflows/android-build.yml`
- **Triggers:** Push to main branch, pull requests, manual workflow dispatch
- **Artifacts:** Debug and Release APKs uploaded to GitHub releases
- **Build Status:** ✅ Currently working

---

## 📋 Build Information

### Latest Build (v1.0.2-bccbf47)
- **Build Number:** 2
- **Commit:** bccbf474fdd9c53fafaf0980e09033d7d5036de3
- **Build Time:** 4m 15s
- **Triggered by:** Automated CI/CD
- **Workflow:** [View Build Run](https://github.com/yoni12ab/VoiceGram-RN/actions/runs/30025175576)

---

## 🐛 Troubleshooting

### Metro File Watching Issues
This project uses React Native 0.72.12 to avoid Metro file watching issues found in newer versions. If you encounter Metro issues, ensure you're using the specified version.

### Build Failures
- Ensure Java JDK 17 is set as JAVA_HOME
- Verify Android SDK 30-34 is installed
- Check that gradlew has execute permissions: `chmod +x android/gradlew`

---

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

---

**Built with ❤️ using React Native and GitHub Actions**
