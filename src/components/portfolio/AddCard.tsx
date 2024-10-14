'use client';

import {PlusCircle} from "@phosphor-icons/react";
import {
  Button,
  Modal,
  ModalAction,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter
} from "keep-react";
import Input from "@/components/input";
import Select from "@/components/input/select";

const AddCard = () => {

  const types = [
    {label: 'web-development', value: 'web-development'},
    {label: 'mobile-development', value: 'mobile-development'},
  ];
  return (
    <Modal>
      <ModalAction asChild>
        <button
          className='border-2 border-white hover:border-blue-500 transition-all text-white hover:text-blue-500 border-dashed bg-darken h-full w-full aspect-video rounded md:rounded-xl flex items-center justify-center'>
          <PlusCircle size={64}/>
        </button>
      </ModalAction>
      <ModalBody>
        <ModalContent className='w-full max-w-7xl space-y-4'>
          <div className='space-y-4'>
            <h3 className='font-bold text-white text-xl'>ADD PORTFOLIO</h3>
            <div className="space-y-2">
              <Input label='Title' id='title'/>
              <Select id='type' label='Type' options={types}/>
            </div>
          </div>
          <ModalFooter>
            <div className="flex flex-row w-full items-end justify-between">
              <ModalClose asChild>
                <Button size="sm" variant="outline" color="secondary">
                  Close
                </Button>
              </ModalClose>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}

export default AddCard;
