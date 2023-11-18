import React from 'react'
import { NativeBaseProvider, Select, Box, CheckIcon, Heading, Text, ThreeDotsIcon, 
  Progress, Divider, Flex, ChevronRightIcon, AlertDialog, Button, Input, Fab, Icon, Modal, FormControl} from 'native-base';
import { useState } from 'react';

const Budget = () => {
  const [month, setMonth] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <Box maxW="300">
        <Select selectedValue={month} minWidth="200" 
        accessibilityLabel="Choose Month" placeholder='Choose Month'
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setMonth(itemValue)}>
          <Select.Item label="January" value="ux" />
          <Select.Item label="Febuary" value="web" />
        </Select>
      </Box>
      <Heading lineHeight= {150} paddingVertical= {6} paddingLeft={30} size="3xl">$300 Left <ThreeDotsIcon></ThreeDotsIcon></Heading>
      <Box w="100%" maxW="400">
        <Progress value={75} mx="10" size="2xl" mb="10"/>
      </Box>
      <Divider my="2" _light={{
        bg: "muted.800"
        }} _dark={{
        bg: "muted.50"
        }} />
        <Text>Income</Text> 
        <Flex flexDirection='row-reverse' mb="3" justifyContent="space-between"> 
        <Button
            size="xs" w={2} h={4}
            colorScheme="blue"
            onPress={()=> {
              setIsOpen(true);
            }}
            >
            .
            </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Add</AlertDialog.Header>
          <AlertDialog.Body>
            <Input mx="3" placeholder="money" w="100%" />
            <Input mx="3" placeholder="when" w="100%" />
            <Input mx="3" placeholder="from where" w="100%" />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="blue">
                Add
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <ChevronRightIcon>
      </ChevronRightIcon>
      </Flex>
        <Divider my="2" _light={{
        bg: "muted.800"
        }} _dark={{
        bg: "muted.50"
        }} />
        <Text>Expense</Text>
      <Fab
      onPress={() => setShowModal(true)}
      title="Add"
      shadow={2}
      right={70}
      bottom={50}
      size="sm" 
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Expense</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>$</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>For what</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      
    </NativeBaseProvider>
  )
}

export default Budget