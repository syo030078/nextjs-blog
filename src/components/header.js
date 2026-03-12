import { Box, Flex, Link, HStack } from '@chakra-ui/react';
import ColorModeToggle from './color-mode-toggle';

export default function Header() {
  return (
    <header>
      <Flex as="nav" align="center" justify="space-between" py="1rem" px={0} maxW="36rem" mx="auto">
        <Box>
          <Link href="/" fontSize="xl" fontWeight="bold">
            Syo Miyata
          </Link>
        </Box>
        <HStack spacing={2}>
          <Link href="https://github.com/syo030078" isExternal>
            GitHub
          </Link>
          <ColorModeToggle />
        </HStack>
      </Flex>
    </header>
  );
}
