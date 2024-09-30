import { Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <Flex h="100vh" flexDir="column">
      <Header />

      <Flex w="100%" h="100%">
        <Sidebar />

        <Flex p={10}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          consequatur placeat natus possimus ex quia quae deleniti obcaecati
          ipsa inventore voluptatum a pariatur officia, architecto sit aut
          molestiae odit aperiam. Amet ipsa velit delectus laudantium
          praesentium autem, nostrum esse dignissimos totam numquam fugiat nobis
          nihil minus minima ex tempore omnis sit! Repellendus, minus illo ut
          consequuntur dolores magnam voluptatibus quaerat! Optio, impedit
          voluptas. Ut possimus necessitatibus facere dolor hic deserunt vero
          enim. Maiores consequuntur maxime similique voluptate blanditiis
          fugiat id, obcaecati tenetur ipsum incidunt aliquam eaque aperiam eius
          quaerat fugit? Unde saepe laboriosam perspiciatis vitae dolorem, vero
          optio ipsa quisquam, placeat beatae assumenda temporibus pariatur id
          recusandae dolor inventore magni laborum, asperiores nesciunt quos
          minima accusamus? Impedit ullam aliquid velit! Laboriosam numquam odio
          omnis reprehenderit, provident minima quidem sit voluptate facere ex
          dolore harum assumenda possimus velit error nemo minus amet impedit,
          nobis hic vitae. Quae maiores quam nostrum aut?
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};
