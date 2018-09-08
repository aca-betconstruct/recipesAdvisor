import React from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';

const AboutUsPage = () => {
  return (
    <Container style={{ marginTop: '140px' }}>
      <h1 className="h1-responsive font-weight-bold text-center my-5 light-green-text">
        About Recipes Advisor{' '}
      </h1>
      <p className="text-center w-responsive mx-auto mb-5">
        Learn more about our team of experts, our award-winning journalism and
        our rigorous recipe development and testing process in the Recipes
        Advisor
      </p>
      <Row>
        <Col lg="7">
          <a className="light-green-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="cutlery" className="pr-2" />
              Food
            </h6>
          </a>
          <p>
            Recipes Advisor has been at the forefront of the healthy-eating
            movement for more than 25 years. Through our award-winning bimonthly
            magazine and high-quality, content-rich website, we publish
            delicious recipes and authoritative, science-based journalism that
            inspires our readers to celebrate the joys of food and make
            better-informed food choices. We are based in Vermont—where the
            magazine was originally founded in 1990—where we are surrounded by a
            robust local, sustainable food culture, farm-to-table restaurants
            and a renowned craft beer and cider scene.
          </p>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="http://images.media-allrecipes.com/userphotos/960x960/3759373.jpg"
              alt="recipes"
            />
            <a>
              <Mask overlay="white-slight" />
            </a>
          </View>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="http://ew.content.allrecipes.com/sites/default/files/inline-images/20150903_tumbleweedfarm_027_2.jpg"
              alt="tumbleweedfarm"
            />
            <a>
              <Mask overlay="white-slight" />
            </a>
          </View>
        </Col>
        <Col lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>What We Stand For</strong>
          </h3>
          <p>
            At Recipes Advisor, our mission is to help make healthy happen every
            day. We provide the inspiration and information people need to make
            healthy eating a way of life. Our experts offer delicious recipes,
            balanced nutritional advice, thought-provoking stories and new ways
            to make healthy choices more exciting. We are about moderation and
            balance—not strict rules or fad diets—because for healthy eating to
            become a way of life, it should be accessible, sustainable,
            inspiring and—above all—delicious.
          </p>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>Our Trusted Recipes</strong>
          </h3>
          <p>
            Recipes Advisor ever-growing collection of recipes and meal plans
            are carefully developed and rigorously tested in the EatingWell Test
            Kitchen by our team of culinary professionals and registered
            dietitians. Before we publish a recipe, it must meet three criteria:
            First, it has to taste good. Next, it needs to meet our nutrition
            parameters. We analyze the nutrition data of every recipe we develop
            and carefully consider each ingredient we call for to ensure that we
            are making recipes that not only taste good, but that are also good
            for you. And finally, the recipe has to be dependable—meaning that
            when you are making it at home, the recipe is easy to follow and it
            works. Every time.
          </p>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="http://images.media-allrecipes.com/userphotos/960x960/4526615.jpg"
              alt="userphotos"
            />
            <a>
              <Mask overlay="white-slight" />
            </a>
          </View>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="http://ew.content.allrecipes.com/sites/default/files/inline-images/ew_kitchen_smoothie_devon5107_3.jpg"
              alt="kitchen"
            />
            <a>
              <Mask overlay="white-slight" />
            </a>
          </View>
        </Col>
        <Col lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>Our Team of Experts</strong>
          </h3>
          <p>
            The Recipes Advisor team includes industry-leading food and
            nutrition editors, registered dietitians, expert Test Kitchen staff
            and designers who produce award-winning and engaging content across
            multitude platforms. Our work has earned more than 50 national and
            international awards for writing, editing, art direction, creative
            marketing and publishing excellence.
          </p>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>Our Media Properties & Products</strong>
          </h3>
          <p>
            We publish authoritative, science-based nutrition articles and
            delicious, high-quality recipes across multiple award-winning
            platforms: our bimonthly magazine in print and digital editions, our
            content-rich website, beautiful cookbooks, dynamic videos, engaging
            social media channels, e-mail newsletters and a frozen-food line.
          </p>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="http://ew.content.allrecipes.com/sites/default/files/inline-images/bitter_wheel_20221_4.jpg"
              alt="bitter"
            />
            <a>
              <Mask overlay="white-slight" />
            </a>
          </View>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUsPage;
