import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
 const MyWebComponent = () => {
    const webViewRef = useRef(null);
    const [webViewHistory, setWebViewHistory] = useState([]);
    const [canGoBack, setCanGoBack] = useState(false);

     // Function to handle Android back button press
  const handleBackButton = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
      return true; // Prevent default behavior (e.g., app exit)
    }
    return false; // Allow default behavior
  };

  useEffect(() => {
    // Add Android back button listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );

    return () => {
      // Remove the back button listener when the component unmounts
      backHandler.remove();
    };
  }, [canGoBack]);

    // Callback function when the WebView navigates
    const handleNavigationStateChange = (navState) => {
        setCanGoBack(navState.canGoBack);
        setWebViewHistory([...webViewHistory, navState.url]);
      };

  return <WebView 
  ref={webViewRef}
  source={{ uri: 'https://mowdmin.vercel.app/' }} 
  style={{ flex: 1 }} 
  onNavigationStateChange={handleNavigationStateChange}
  />;
}

export default MyWebComponent;