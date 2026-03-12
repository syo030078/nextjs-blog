import { Box, Flex, Image, Link } from '@chakra-ui/react';

export default function Header() {
  return (
    <header>
      <Flex as="nav" align="center" justify="space-between" py="1rem" px={0} maxW="36rem" mx="auto">
        <Flex align="center" gap="0.5rem">
          <Image
            borderRadius="full"
            boxSize="28px"
            src="/images/cat-icon.svg"
            alt="cat icon"
          />
          <Link href="/" fontSize="xl" fontWeight="bold">
            Syo Miyata
          </Link>
        </Flex>
        <Box>
          <Link href="https://github.com/syo030078" isExternal>
            GitHub
          </Link>
        </Box>
      </Flex>
    </header>
  );
}
