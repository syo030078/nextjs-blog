import { Box, Flex, Link } from '@chakra-ui/react';

export default function Header() {
  return (
    <header>
      <Flex as="nav" align="center" justify="space-between" p={4}>
        <Box>
          <Link href="/" fontSize="xl" fontWeight="bold">
            Syo Miyata
          </Link>
        </Box>
        <Box>
          <Link href="https://github.com/syo030078" isExternal>
            GitHub
          </Link>
        </Box>
      </Flex>
    </header>
  );
}
