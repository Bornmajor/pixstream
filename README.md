<img src="https://github.com/user-attachments/assets/751c6668-9ac2-4e5a-84ef-f1e7efbbbb6e" width="100"> 

# PixStream 

PixStream is a React Native app designed to enhance content exploration while providing a seamless user experience, even in challenging network conditions. The app ensures users can resume their journey without losing progress or loading unintended new content when connectivity is disrupted.

## Problem solving
When users browse apps that depend on network resources (like photos and videos), a temporary loss of connection can cause incomplete loading or failures. In most apps, users instinctively refresh the page to try again. However, this often results in loading new content, which disrupts the user's experience and forces them to lose their place in the app.

## Solution
I developed an Android app that enhances the user experience by addressing this issue. The app ensures that users can seamlessly continue their browsing experience after losing and regaining network connectivity, without unintentionally loading new content. Here's how it works:

1. <b>State Preservation</b> : The app captures and saves the user's browsing state, including the specific content they were viewing.
When a network failure occurs, the app retains this state instead of attempting to load new data.
2. <b>Connection Handling</b>: The app monitors the network connection in real-time. When connectivity is restored, it resumes fetching the content exactly where the user left off, ensuring a smooth continuation.
3. <b>Optimized Resource Management</b>: The app ensures that partially loaded resources are handled intelligently. For example, a partially downloaded photo or video resumes downloading upon reconnection, avoiding data waste or redundant requests

# Features

1. <b>Seamless state preservation</b>: Users can continue browsing where they left off after losing and regaining network connection.
No need to refresh manually—content is intelligently resumed.
2. <b>Content Exploration</b> : Users select content types they are interested in during onboarding.The app fetches content dynamically using the Pexels API.
3. <b>User Engagement </b> : Like, share, and save content for later viewing.
4. <b>Authentication</b> : Secure user authentication for personalized experiences.
5. <b>Onboarding Screens</b>: Guides users through selecting their preferred content types during the first launch.
6. <b>Offline Handling</b>: Robust offline support ensures a smooth experience even when the network is temporarily unavailable.

## Technologies Used
* React Native: Framework for building cross-platform mobile applications.
* Expo: Toolset for rapid development and deployment of React Native apps.
* React Native Navigation: Manages navigation and routing in the app.
* Async Storage: Local storage for saving user preferences and app state.
* Axios: Handles API requests to the Pexels API.
* React Native Paper: Provides material design components for UI.
* NetInfo: Detects and manages network status changes.






## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src** directory.

# Video

Short video illustrating how seamlessly user continue their browsing experience after losing and regaining network connectivity,

https://github.com/user-attachments/assets/ff998d9f-eac0-43b5-9064-7ce28afbf0f4


# Shots


<img src="https://github.com/user-attachments/assets/44c2c0ca-caa8-4410-8702-ebd4a149a3d8"  width="200"> 

<img src="https://github.com/user-attachments/assets/ccc2bb27-88b5-4f2d-a337-5497607b909b" width="200"> 

<img src="https://github.com/user-attachments/assets/ba9195fb-8984-4448-b9d3-31498dac041a" width="200"> 

<img src="https://github.com/user-attachments/assets/7f41765e-b867-40f5-9ba5-3f01c558037b" width="200"> 

## Web version of similar solution coming soon



