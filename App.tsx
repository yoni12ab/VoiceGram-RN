/**
 * VoiceGram - React Native
 * Voice-to-Text Telegram with Personal Account Integration
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>🎙️ VoiceGram</Text>
          <Text style={styles.subtitle}>React Native 0.72.12 - Fixed Metro Issues</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✅ Project Setup Complete</Text>
          <Text style={styles.description}>
            React Native project successfully created with:
          </Text>
          
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>✓ React Native 0.72.12 (older stable version)</Text>
            <Text style={styles.featureItem}>✓ Fixed Metro file watching issues</Text>
            <Text style={styles.featureItem}>✓ Android SDK configuration ready</Text>
            <Text style={styles.featureItem}>✓ Working build system</Text>
            <Text style={styles.featureItem}>✓ Ready for APK generation</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Next Steps</Text>
          <Text style={styles.description}>
            The project is ready for library integration. The following libraries will be added:
          </Text>
          
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>📱 react-native-tdlib (Personal Telegram Account)</Text>
            <Text style={styles.featureItem}>🎤 react-native-audio-recorder-player (Voice Recording)</Text>
            <Text style={styles.featureItem}>🗣️ react-native-voice (Speech-to-Text)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔧 Build Status</Text>
          <View style={[styles.statusBadge, { backgroundColor: '#51CF66', alignSelf: 'flex-start' }]}>
            <Text style={styles.statusText}>✅ Ready for APK Build</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  hero: {
    backgroundColor: '#2196F3',
    padding: 30,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E3F2FD',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  featureList: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
  },
  featureItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  statusBadge: {
    padding: 12,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
