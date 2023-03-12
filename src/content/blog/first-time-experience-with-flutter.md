---
title: "First Experience with Flutter"
subtitle: "My first experience with Flutter "
tags: ["How To", "Dev"]
image: "/images/contents/flutter-first-time.png"
published_date: '12-03-2023'
headline: true
---

## Chapter 1 — Code Shock (Template Language Style)
My first experience with Flutter was definitely a memorable one. As someone who had been working as a backend developer for almost 4 years, I was no stranger to frontend development, having worked on a few projects using JavaScript frameworks such as React Native and Nativescript using Vue. However, the idea of creating multiplatform applications using a single codebase was intriguing to me and that's how I stumbled upon Flutter.

Flutter is Google's open-source UI toolkit that allows developers to build native applications for mobile, web, and desktop, all from a single codebase. With its fast development cycle, reactive and expressive UI, and extensive set of pre-built widgets, Flutter has become increasingly popular among developers worldwide.

However, as excited as I was to try out this new technology, I must admit that I found it challenging to understand Flutter's nested functional templating, which I believe is a crucial aspect of Flutter development. It took me a while to get the hang of it, but once I did, it was smooth sailing from there. One of the things that helped me a lot during this learning process was my trusty VSCode, which provided me with real-time error detection and suggestions, making the entire process a lot less daunting.

Despite the initial learning curve, my experience with Flutter has been nothing short of exceptional. Flutter's hot reload feature has made development a breeze, allowing me to make changes to the code in real-time and see the results instantly. Furthermore, Flutter's extensive library of widgets and third-party packages has made it easy to add functionality to my apps without having to write the code from scratch.

Here the templating style comparision between Nativescript vs Flutter
```jsx
// React Native
class CustomCard extends React.Component {
  render() {
    return (
      <View>
        <Text> Card {this.props.index} </Text>
        <Button
          title="Press"
          onPress={() => this.props.onPress(this.props.index)}
        />
      </View>
    );
  }
}
// Usage
<CustomCard onPress={this.onPress} index={item.key} />
```

```dart
// Flutter
class CustomCard extends StatelessWidget {
  CustomCard({@required this.index, @required
     this.onPress});

  final index;
  final Function onPress;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: <Widget>[
          Text('Card $index'),
          TextButton(
            child: const Text('Press'),
            onPressed: this.onPress,
          ),
        ],
      )
    );
  }
}
    ...
// Usage
CustomCard(
  index: index,
  onPress: () {
    print('Card $index');
  },
)
    ...
```

Well, if you come from Javascript or Markup language, for readibility I’ll prefer Nativescript than Flutter. If you need strong type checked, you can use Typescript.

## Chapter 2 — Invest New Language (Dart)

When I first started exploring Flutter, I was under the impression that it was a language in itself. However, I soon discovered that Flutter was a framework that used the Dart programming language as its foundation. Dart is an object-oriented programming language that was developed by Google and is widely used for building web, server, and mobile applications. Dart is a relatively new language compared to other popular languages like Java, Python, and JavaScript, but it is gaining popularity rapidly, especially among developers who work with Flutter.

As someone who primarily worked with JavaScript and Golang, diving into the world of Dart was quite a change for me. However, I was pleasantly surprised by the clean syntax and easy-to-read code that Dart offered. One of the features that stood out to me was the use of mixins, which allowed me to reuse code in multiple classes. This feature helped me to write more concise and maintainable code.

Another concept that was new to me was TypeSafe collections. In Dart, TypeSafe collections ensure that only values of a specific type can be added to a collection. This feature helped me to write more robust code, as it prevented me from adding incorrect data types to my collections and causing runtime errors.

One of the things that I found particularly helpful during my learning journey with Flutter and Dart was the DartPad. DartPad is an online platform that allows developers to write and run Dart code in their browser. It is a great tool for quickly prototyping and testing code snippets without the need for a local development environment.

## Chapter 3 — How I learn?

Learning Flutter and Dart is not an overnight process, and it does require some effort and dedication. When I first started learning Flutter, it took me around 2-3 weeks to gain enough knowledge to create simple projects like CounterApp or HelloWorldApp. However, this timeline is very approximate, as I was only able to devote 1-2 days per week to learning Flutter.

One of the approaches that helped me understand Flutter was to rewrite existing projects using Flutter. Whenever I came across a new syntax or concept that I didn't understand, I would research it online or watch tutorials on YouTube to help me understand it better. I found that this hands-on approach helped me to internalize the concepts much better than just reading about them.

As I progressed in my learning journey, I realized that Flutter's documentation was excellent, especially for developers coming from a JavaScript background. The Flutter docs provided clear explanations of the various concepts and features of Flutter, along with detailed code examples. I also discovered that Flutter had an active community of developers who were always willing to help answer questions and provide guidance.

If you're coming from a React Native background, Flutter has an excellent guide for React Native developers, which provides a side-by-side comparison of the two frameworks' features and concepts. This guide helped me understand the similarities and differences between React Native and Flutter, which made the transition to Flutter much smoother.

## Chapter 4 - Why I choose it?

After spending some time learning Flutter and Dart, I can say that it has been a rewarding experience. Although it does require some effort and dedication, the results are well worth it. I have been able to create mobile, web, and desktop applications with a single codebase, which has saved me time and effort.

One of the approaches that helped me understand Flutter was to rewrite existing projects using Flutter. This hands-on approach helped me to internalize the concepts much better than just reading about them. I found that whenever I came across a new syntax or concept that I didn't understand, researching it online or watching tutorials on YouTube helped me understand it better.

Additionally, Flutter's documentation was excellent, especially for developers coming from a JavaScript background. The Flutter docs provided clear explanations of the various concepts and features of Flutter, along with detailed code examples. Furthermore, Flutter has an active community of developers who are always willing to help answer questions and provide guidance.

Another thing that stood out to me was the clean syntax and easy-to-read code that Dart offered. Dart's use of mixins and TypeSafe collections helped me to write more concise and maintainable code, which made my applications more robust and scalable.

If you're coming from a React Native background, Flutter has an excellent guide for React Native developers that provides a side-by-side comparison of the two frameworks' features and concepts. This guide helped me understand the similarities and differences between React Native and Flutter, which made the transition to Flutter much smoother.

## Conclusion
In conclusion, learning Flutter and Dart is a worthwhile investment for developers looking to build modern, responsive, and scalable applications. The hands-on approach of rewriting existing projects, leveraging excellent documentation and community resources, and the clean syntax and powerful features of Dart helped me gain a better understanding of Flutter and Dart.