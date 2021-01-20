import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <>
        <Title level={1}>About</Title>
        <Paragraph>
          Anh is an exciting gym assistant who is obsessed with the murder of
          his friend Ben, two years ago
        </Paragraph>
        ~ A Biography ~
        <Paragraph>
          Anh Nguyen Ruiz is a 21-year-old gym assistant whose life is dominated
          by solving the murder of his friend, Ben Wilkinson. Ben was poisoned
          in 2019 and the killer was never brought to justice.
        </Paragraph>
        <Paragraph>
          He is Viet Nam who defines himself as straight. He started studying
          sports science at college but never finished the course. He is a
          vegetarian. He is obsessed with vintage dresses. Physically, Anh is in
          pretty good shape.
        </Paragraph>
        <Paragraph>
          He is average-height with chocolate skin, black hair and green eyes.
          He has a monobrow. He grew up in a middle class neighbourhood. His
          father left when he was young, leaving him with his mother, who was an
          addict.
        </Paragraph>
        <Paragraph>
          He is currently single. His most recent romance was with a student
          called Adrian Eva Perry, who was the same age as him. They broke up
          because Adrian couldn't deal with Anh's obsession with Ben's death.
        </Paragraph>
        <Paragraph>
          Anh's best friend is a gym assistant called Olivia Khan. They are
          inseparable. He also hangs around with a gym assistant called Ollie
          Reynolds. They enjoy spreading fake news on Facebook together.
        </Paragraph>
      </>
    );
  }
}

export default About;
