/* @flow */

'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


var createReactClass = require('create-react-class');
import PropTypes from 'prop-types';

export const CalendarEvent = createReactClass({
  propTypes: {
    style: View.propTypes.style,
    title: PropTypes.string.isRequired,
  },

  render() {
    const { style, title } = this.props;
    return (
      <View style={[styles.calendarEvent, style]}>
        <Text>{title}</Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  calendarEvent: {
    position: 'absolute',
  },
});
