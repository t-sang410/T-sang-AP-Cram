# T-sang AP Cram - Cross-Platform Mobile App

A comprehensive React Native application built with Expo for iOS and Android platforms, featuring authentication, navigation, state management, and essential mobile app components.

## 🚀 Features

### Core Features
- **Cross-platform compatibility** (iOS & Android)
- **User authentication** (Login, Register, Password Reset)
- **Secure token management** with automatic refresh
- **Biometric authentication** support
- **Push notifications** with Expo Notifications
- **Theme system** (Light, Dark, Auto)
- **Offline support** with local storage
- **Form validation** with Yup schemas
- **State management** with Redux Toolkit
- **Navigation** with React Navigation v6

### UI/UX Features
- **Responsive design** for all screen sizes
- **Custom components** library
- **Toast notifications** for user feedback
- **Loading states** and error handling
- **Accessibility** compliant components
- **Smooth animations** and transitions

### Developer Features
- **TypeScript** for type safety
- **ESLint & Prettier** for code quality
- **Path mapping** for clean imports
- **Modular architecture** for scalability
- **Custom hooks** for reusable logic
- **Comprehensive error handling**

## 📱 Screens & Navigation

### Authentication Flow
- **Onboarding** - Welcome screen with app introduction
- **Login** - Email/password authentication
- **Register** - User registration with validation
- **Forgot Password** - Password reset functionality

### Main App Flow
- **Home** - Dashboard with user overview
- **Profile** - User profile management
- **Notifications** - Push notification center
- **Settings** - App preferences and account settings

## 🛠 Tech Stack

### Core Technologies
- **React Native** 0.74.5
- **Expo** ~51.0.0
- **TypeScript** for type safety
- **React Navigation** v7 for navigation

### State Management
- **Redux Toolkit** for global state
- **React Context** for theme and auth
- **AsyncStorage** for local persistence

### UI & Styling
- **React Native Elements** for UI components
- **React Native Paper** for Material Design
- **React Native Vector Icons** for icons
- **React Native SVG** for vector graphics

### Forms & Validation
- **React Hook Form** for form management
- **Yup** for schema validation
- **Custom validation** utilities

### Notifications & Permissions
- **Expo Notifications** for push notifications
- **Expo Permissions** for device permissions
- **React Native Permissions** for advanced permissions

### Additional Features
- **Axios** for HTTP requests
- **React Native Keychain** for secure storage
- **React Native Biometrics** for biometric auth
- **Lottie React Native** for animations

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install Expo CLI globally**
   ```bash
   npm install -g @expo/cli
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on specific platforms**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── common/         # Common components (Button, Input, etc.)
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Authentication context
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom React hooks
├── navigation/         # Navigation configuration
│   ├── AppNavigator.tsx    # Main app navigator
│   ├── AuthNavigator.tsx   # Auth flow navigator
│   └── MainNavigator.tsx   # Main app navigator
├── screens/            # Screen components
│   ├── auth/          # Authentication screens
│   └── main/          # Main app screens
├── services/          # API and external services
│   ├── ApiService.ts      # HTTP client
│   ├── AuthService.ts     # Authentication API
│   ├── NotificationService.ts # Push notifications
│   └── StorageService.ts  # Local storage
├── store/             # Redux store configuration
│   ├── slices/        # Redux slices
│   └── index.ts       # Store configuration
├── types/             # TypeScript type definitions
├── utils/             # Utility functions and constants
│   ├── constants.ts   # App constants
│   ├── helpers.ts     # Helper functions
│   ├── validation.ts  # Validation schemas
│   └── toastConfig.tsx # Toast configuration
└── App.tsx            # Main app component
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
API_BASE_URL=https://your-api.com/api
EXPO_PUBLIC_API_KEY=your-api-key
```

### App Configuration
Update `app.json` with your app details:
- Bundle identifier
- App name and description
- Icons and splash screen
- Permissions

## 📱 Platform-Specific Features

### iOS Features
- Face ID / Touch ID authentication
- iOS-specific permissions
- App Store compliance
- iOS design guidelines

### Android Features
- Fingerprint authentication
- Android-specific permissions
- Google Play compliance
- Material Design components

## 🚀 Building for Production

### iOS Build
```bash
expo build:ios
```

### Android Build
```bash
expo build:android
```

### EAS Build (Recommended)
```bash
eas build --platform all
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Code Formatting
```bash
npm run format
```

## 📚 Key Components

### Authentication System
- Secure token storage
- Automatic token refresh
- Biometric authentication
- Social login ready

### Navigation System
- Stack navigation for auth flow
- Tab navigation for main app
- Deep linking support
- Navigation state persistence

### State Management
- Redux for global state
- Context for theme/auth
- Local storage integration
- Offline state handling

### UI Components
- Consistent design system
- Accessibility support
- Theme-aware components
- Responsive layouts

## 🔒 Security Features

- **Secure token storage** with Keychain/Keystore
- **Biometric authentication** support
- **Certificate pinning** ready
- **Input validation** and sanitization
- **Error boundary** protection

## 📈 Performance Optimizations

- **Code splitting** with lazy loading
- **Image optimization** with caching
- **Bundle size optimization**
- **Memory leak prevention**
- **Smooth animations** with Reanimated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@tsang-apcram.com or create an issue in the repository.