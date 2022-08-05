import { Box, Image } from '@chakra-ui/react';
import { motion, useTime, useTransform } from 'framer-motion';

// Parent Container Animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Child Component Animations
const containerButton = {
  hidden: { opacity: 0, x: '-50px', scale: 0 },
  show: { opacity: 1, x: '0px', scale: 1 },
};

const LinkComponent = ({ image, links }) => {
  // Framer Hooks For Rotation Animation
  const time = useTime();
  const rotate = useTransform(time, [0, 20000], [0, 360], { clamp: false });
  return (
    <Box
      h="500px"
      w="500px"
      display="grid"
      placeContent="center"
      transform={['scale(0.9)', null, 'scale(1)', null]}
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Image Wrapper and Image */}
      <Box
        w="200px"
        h="200px"
        display="grid"
        placeContent="center"
        borderRadius="100%"
        boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
      >
        <Image
          w="150px"
          h="150px"
          src={image}
          alt="Center Image"
          as={motion.img}
          initial={{ opactiy: 0, scale: 0 }}
          animate={{ opactiy: 1, scale: 1 }}
          transition="0.1s linear"
        />
      </Box>

      {/* Link Buttons and Wrapper */}
      <Box
        position="absolute"
        w="100%"
        h="100%"
        as={motion.div}
        style={{ rotate }}
      >
        {links.map((link, index) => (
          <ButtonComponent
            link={link}
            index={index}
            totalCount={links.length}
          />
        ))}
      </Box>
    </Box>
  );
};

const ButtonComponent = ({ link, index, totalCount }) => {
  // Framer Hooks for Negative Rotation Animation
  const time = useTime();
  const rotate = useTransform(time, [0, 20000], [0, -360], { clamp: false });
  return (
    <Box
      w="100px"
      h="100px"
      top="200px"
      left="200px"
      position="absolute"
      as={motion.div}
      style={{ rotate: `${((index + 1) * 360) / totalCount}deg` }}
      variants={containerButton}
    >
      <Box w="100%" h="100%" position="relative">
        <a href={link.url} target="_blank" rel="noreferrer">
          <Box
            boxShadow="0px 0px 20px rgba(0,0,0,0.5)"
            display="grid"
            placeContent="center"
            w="75px"
            h="75px"
            position="absolute"
            borderRadius="100%"
            left="-110px"
            top="-110px"
            bgGradient={`linear(to-tl, ${link.color1},${link.color2})`}
            as={motion.div}
            style={{ rotate }}
            whileHover={{ scale: 1.2, y: '-10px', x: '-10px' }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              color="white"
              fontSize={35}
              as={motion.div}
              style={{ rotate: `-${((index + 1) * 360) / totalCount}deg` }}
            >
              {link.icon}
            </Box>
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default LinkComponent;
