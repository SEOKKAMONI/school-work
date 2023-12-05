import { Box, Flex, Text } from "@chakra-ui/react"

const ResultPage = () => {
    return (
        <Box display="flex" gap="48px" flexDirection="column" alignItems="center" paddingTop="48px">
            <Text fontSize="48px" fontWeight="bold">비교한 결과에요!</Text>
            <Flex flexDirection="column" gap="16px">
                <Text fontSize="32px" fontWeight="medium">SEOKKAMONI님은 30일간 327커밋을 하였어요</Text>
                <Text fontSize="32px" fontWeight="medium">arkk200님은 30일간 272커밋을 하였어요</Text>
                <Text fontSize="32px" fontWeight="medium">SEOKKAMONI님의 <Text as="span" color="red">승리</Text>입니다</Text>
            </Flex>
            <Flex flexDirection="column" gap="48px">
                <Text fontSize="24px" fontWeight="bold">SEOKKAMONI님의 잔디에요</Text>
                <img src="https://ghchart.rshah.org/SEOKKAMONI" width="900px" height="200px" />
                <Text fontSize="24px" fontWeight="bold">arkk200님의 잔디에요</Text>
                <img src="https://ghchart.rshah.org/arkk200" width="900px" height="200px" />
            </Flex>
        </Box>
    )
}

export default ResultPage;