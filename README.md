# VoiceGram - Expo

🎙️ **Voice-to-Text Telegram with Personal Account Integration**

A modern Expo React Native application that enables voice recording, speech-to-text conversion, and personal Telegram account messaging - eliminating the 403 errors from Bot API limitations.

## 🚀 Key Features

- **📱 Personal Telegram Account Integration** - Will use personal account messaging instead of bot API
- **🎤 Modern Voice Recording** - Will use expo-av for modern audio recording
- **🗣️ Real-time Speech-to-Text** - Will use expo-speech for live transcription
- **🛠️ Modern Build Pipeline** - GitHub Actions CI/CD with automated builds
- **📱 Cross-Platform** - iOS, Android, and Web support
- **✅ No Metro File Watching Issues** - Expo handles bundling automatically

## 🛠️ Technical Stack

- **Expo SDK:** 57.0.8
- **React Native:** 0.86.0
- **Platforms:** iOS, Android, Web
- **Build System:** Expo EAS + GitHub Actions
- **Telegram:** Personal Account API - Coming Soon
- **Audio:** expo-av - Coming Soon
- **Speech:** expo-speech - Coming Soon

## 📋 Prerequisites

- Node.js 18+ 
- Expo CLI
- EAS CLI (for building)
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd VoiceGram-Expo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App

#### Development Mode
```bash
npm start
```

#### Android
```bash
npm run android
```

#### iOS (macOS only)
```bash
npm run ios
```

#### Web
```bash
npm run web
```

### 4. Build for Production
```bash
# Export bundles for all platforms
npx expo export

# Or use EAS Build for standalone apps
eas build --platform all
```

## 🔧 Configuration

The app is configured in `app.json` with:
- **Name:** VoiceGram
- **Bundle Identifier:** com.voicegram
- **Platforms:** iOS, Android, Web
- **Orientation:** Portrait

## 🚢 GitHub Actions CI/CD

The project includes automated builds via GitHub Actions:

### Trigger Builds
- **Automatic:** On push to `main` or `master` branches
- **Manual:** Via "workflow_dispatch" in GitHub Actions tab
- **Pull Requests:** On PRs to `main` or `master`

### Build Artifacts
- **Web Bundle:** Automatically built and uploaded
- **iOS Bundle:** Automatically built and uploaded
- **Android Bundle:** Automatically built and uploaded
- **GitHub Releases:** Automatically created for non-PR builds

## 🏗️ Project Structure

```
VoiceGram-Expo/
├── .github/workflows/          # GitHub Actions CI/CD
│   └── expo-build.yml          # Expo build workflow
├── assets/                     # App assets (icons, splash screens)
├── App.js                      # Main React Native component
├── app.json                    # Expo configuration
├── package.json                # Node dependencies
└── README.md                   # This file
```

## 🧪 Current Status

The project currently includes:
- **✅ Expo SDK 57.0.8 Setup:** Latest Expo with React Native 0.86.0
- **✅ Working Build System:** No Metro file watching issues
- **✅ GitHub Actions CI/CD:** Automated build pipeline
- **✅ Cross-Platform Support:** iOS, Android, Web
- **✅ Basic UI:** VoiceGram branding and feature overview
- **✅ Export Functionality:** Successfully exports bundles for all platforms

### Coming Soon
- Personal Telegram account integration
- Voice recording implementation
- Speech-to-text functionality
- Message sending and receiving
- Real-time status updates

## 🐛 Troubleshooting

### Build Issues

**Dependencies Issues:**
```bash
# Clean install
rm -rf node_modules
npm install

# Reset Expo cache
npx expo start -c
```

**Platform-Specific Issues:**
```bash
# Clear Watchman
watchman watch-del-all

# Reset Metro cache
npx expo start --reset-cache
```

### EAS Build Issues

**Authentication:**
```bash
# Login to Expo
eas login

# Configure project
eas build:configure
```

## 🔧 Build System Details

- **Expo SDK:** 57.0.8
- **React Native:** 0.86.0
- **Node.js:** 18+
- **Build Platforms:** iOS, Android, Web
- **CI/CD:** GitHub Actions + EAS Build

## 📄 License

This project is part of the VoiceGram application suite.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using Expo SDK 57.0.8 and GitHub Actions**