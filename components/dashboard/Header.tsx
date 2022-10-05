import React from 'react'
import { 
        Grid,
        GridItem,
        Text,
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider,
        Button,
        Image,
        Input,
        InputGroup,
        InputRightElement,
        Avatar,
        AvatarGroup
     } from '@chakra-ui/react'
     import { 
        HamburgerIcon,
        ChevronDownIcon 
      } from '@chakra-ui/icons'
     


const Header = () => {
  return (
    <Grid 
    templateColumns={{ 
                    base: '1fr 4fr 9fr 18fr 353px 11fr',
                    md: '1fr 4fr 9fr 18fr 353px 11fr', 
                  
                    
                 }}
    
     gap={8}
     w="100%"
     p={3}
     height= "70px"
    alignItems = "center"
     >
        <GridItem>
            <Image src='/Logo-small.svg' alt="logo"/>
        </GridItem>
        <GridItem>
            <Text
                fontStyle = 'normal'
                fontWeight = '600'
                fontSize= '18px'
            >Thullo</Text>
        </GridItem>
        <GridItem>
            <Text
                fontStyle = 'normal'
                fontWeight = '600'
                fontSize= '18px'
            >Devchallenges Board</Text>
        </GridItem>
        <GridItem>
        <Menu>
            <MenuButton as={Button} leftIcon={<HamburgerIcon />}>
                All board
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            </Menu>
        </GridItem>
        <GridItem>
                <InputGroup
                    rounded={10}
                    boxShadow = '0px 2px 24px #33333361'
                    display="flex"
                    height="45px"
                    alignItems = 'center'
                >
                    <Input 
                        type="text"
                        w="300px"
                        border="none"
                    />
                    <Button 
                    px={8}
                    rounded={10}
                    background="#2F80ED"
                    color="#fff"
                    _hover={{
                        background:"#1861c0",
                        color:"#fff"
                    }}
                    >
                        search
                    </Button>
                </InputGroup>
        </GridItem>
        <GridItem>
        <AvatarGroup spacing='1rem'>
                <Avatar bg='red.500'  />
                <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton 
      isActive={isOpen}
       as={Button} 
       rightIcon={<ChevronDownIcon />}
       backgroundColor="transparent"
       >
        <Text>Daniel lawson</Text>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
        </AvatarGroup>
        </GridItem>
      

    </Grid>
  )
}

export default Header