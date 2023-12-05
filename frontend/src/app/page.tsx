"use client"

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter()

  return (
  <>
    <Box display="flex" flexDirection="column" gap="72px" alignItems="center" width="100vw" height="100vh" paddingTop="48px" backgroundColor="white">
      <Text fontSize="48px" fontWeight="bold">깃허브 커밋 수를 비교해봐요!</Text>
      <Flex flexDirection="column" gap="48px">
        <Input placeholder="친구1의 깃허브 아이디를 입력해주세요." width="900px" height="72px" fontSize="36px"  />
        <Input placeholder="친구1의 깃허브 아이디를 입력해주세요." width="900px" height="72px" fontSize="36px"  />
      </Flex>
      <Button onClick={() => router.push("/result")} fontSize="50px" width="400px" height="200px" borderRadius="32px">결과 바로가기</Button>
    </Box>
  </>
  )
}

export default MainPage;