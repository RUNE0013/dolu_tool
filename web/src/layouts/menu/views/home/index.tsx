import { Text, Stack, SimpleGrid, Button, Paper, Group } from '@mantine/core'
import { GiTeleport } from 'react-icons/gi'
import { RiHomeGearFill } from 'react-icons/ri'
import { getInteriorData } from '../../../../atoms/interior'
import { getLastLocationUsed, teleportToLocation } from '../../../../atoms/location'

const Home: React.FC = () => {
  const location = getLastLocationUsed()
  const interior = getInteriorData()

  return (
    <SimpleGrid cols={1}>
      <Stack>
        <Paper p="md">
          
          <Group position="apart">
            <Text size={20} weight={600}>Last location</Text>
            <GiTeleport size={24} />
          </Group>

          <Text>Name: {location.name}</Text>
          
          <Group position='apart'>
            <Text>Coords: {location.x}, {location.y}, {location.z}</Text>
            <Button
              color='orange'
              variant='outline'
              onClick={() => {
                teleportToLocation({ x: location.x, y: location.y, z: location.z, heading: location.heading })
              }}
              value={location.name}>Teleport
            </Button>
          </Group>
        </Paper>

        <Paper p="md">
          <Group position="apart">
            <Text size={20} weight={600}>Current interior</Text>
            <RiHomeGearFill size={24} />
          </Group>
         
          {
            interior.interiorId > 0
            ? 
              <>
                <Text>Interior ID: {interior.interiorId}</Text>
                <Text>Current room: {interior.currentRoom?.name}</Text>
              </>
            : 
              "Not inside any interior"
          }
        </Paper>
      </Stack>

      {/* -- Making another box on the right side */}

      {/* <Box>
        <Stack>
        </Stack>
      </Box> */}

    </SimpleGrid>
  )
}

export default Home
