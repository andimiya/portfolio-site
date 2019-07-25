import React from "react";
import SwipeableViews from "react-swipeable-views";
import Animated from "animated/lib/targets/react-dom";

const styles = {
  root: {
    background: "#000",
    padding: "0 50px"
  },
  slide: {
    padding: "24px 16px",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex"
  },
  img: {
    width: 180,
    height: 180,
    display: "block",
    marginBottom: 16
  }
};

const albums = [
  {
    name: "Abbey Road",
    src: "https://placekitten.com/g/200/200"
  },
  {
    name: "Bat Out of Hell",
    src: "https://placekitten.com/g/250/250"
  },
  {
    name: "Homogenic",
    src: "https://placekitten.com/g/300/300"
  }
];

class SwipeTest extends React.Component {
  state = {
    index: 0,
    position: new Animated.Value(0)
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };

  handleSwitch = (index, type) => {
    if (type === "end") {
      Animated.spring(this.state.position, { toValue: index }).start();
      return;
    }
    this.state.position.setValue(index);
  };

  render() {
    const { index, position } = this.state;

    return (
      <SwipeableViews
        index={index}
        style={styles.root}
        onChangeIndex={this.handleChangeIndex}
        onSwitching={this.handleSwitch}
      >
        {albums.map((album, currentIndex) => {
          const inputRange = albums.map((_, i) => i);
          const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.7;
            })
          });
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.3;
            })
          });
          const translateX = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return (100 / 2) * (i - currentIndex);
            })
          });

          return (
            <Animated.div
              key={String(currentIndex)}
              style={Object.assign(
                {
                  opacity,
                  transform: [{ scale }, { translateX }]
                },
                styles.slide
              )}
            >
              <img style={styles.img} src={album.src} alt="cover" />
              {album.name}
            </Animated.div>
          );
        })}
      </SwipeableViews>
    );
  }
}

export default SwipeTest;
