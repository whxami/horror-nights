import React, { useState, useRef, useEffect, FC } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  Keyboard,
} from 'react-native';

import CloseIcon from 'components/CloseIcon';
import SearchIcon from 'components/SearchIcon';
import { useSearch } from 'context/searchContext';
import { useThemedStyles } from 'theme/ThemeProvider';
import { theme as themeTokens } from 'theme/tokens';

import { SearchHeaderProps } from './types';

import { createSearchHeaderStyles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

const SearchHeader: FC<SearchHeaderProps> = (props) => {
  const { placeholder = '' } = props;
  const styles = useThemedStyles((theme) => createSearchHeaderStyles(theme));
  const { searchQuery, setSearchQuery, setIsSearchActive } = useSearch();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animatedWidth = useRef(new Animated.Value(32)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);
  const currentAnimation = useRef<Animated.CompositeAnimation | null>(null);

  const expandedWidth = screenWidth - 14 - 32 - 12 - 14; // paddings

  useEffect(() => {
    if (currentAnimation.current) {
      currentAnimation.current.stop();
    }

    if (isExpanded) {
      setIsAnimating(true);
      setIsSearchActive(true);
      currentAnimation.current = Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: expandedWidth,
          useNativeDriver: false,
          duration: 250,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]);

      currentAnimation.current.start((finished) => {
        if (finished) {
          setIsAnimating(false);
          inputRef.current?.focus();
        }
      });
    } else {
      setIsAnimating(true);
      setSearchQuery('');
      Keyboard.dismiss();
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: 32,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsAnimating(false);
      });
    }

    return () => {
      if (currentAnimation.current) {
        currentAnimation.current.stop();
        setSearchQuery('');
      }
    };
  }, [isExpanded]);

  const handleSearchPress = () => {
    if (!isAnimating) {
      setIsExpanded(true);
    }
  };

  const handleClosePress = () => {
    if (!isAnimating) {
      setSearchQuery('');
      setIsExpanded(false);
    }
  };

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
  };

  if (!isExpanded && !isAnimating) {
    return (
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearchPress}
        activeOpacity={0.8}
      >
        <SearchIcon width={18} height={18} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.expandedWrapper}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleClosePress}
          activeOpacity={0.8}
        >
          <CloseIcon width={13} height={13} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { width: animatedWidth }]}>
        <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
          <SearchIcon
            color={themeTokens.colors.background}
            width={18}
            height={18}
          />
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleTextChange}
            placeholder={placeholder}
            onSubmitEditing={() => Keyboard.dismiss()}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
            selectionColor={themeTokens.colors.background}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default SearchHeader;
