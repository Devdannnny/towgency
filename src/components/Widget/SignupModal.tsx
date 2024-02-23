import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaCarSide, FaChevronRight } from "react-icons/fa6";
import { GiMechanicGarage, GiTowTruck } from "react-icons/gi";
import { LuCar } from "react-icons/lu";

const Signup = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const UserType = [
    {
      id: 0,
      title: "Motorist",
      desc: "Get towing services and repairs at a click",
      icon: <LuCar size={24} />,
    },
    {
      id: 1,
      title: "Towing Truck Drivers",
      desc: "Make money by helping stranded motorists",
      icon: <GiTowTruck size={24} />,
    },
    {
      id: 2,
      title: "Auto Mechanic",
      desc: "Get more jobs and grow your business",
      icon: <GiMechanicGarage size={24} />,
    },
  ];
  return (
    <>
      <Button
        className="rounded-[30px] bg-tow-secondary h-full text-tow-primary text-base"
        onPress={onOpen}
      >
        Sign up
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-100",
        }}
        style={{
          marginTop: "0px",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 30,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
            exit: {
              y: -30,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            },
          },
        }}
        placement="top-center"
      >
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalBody>
                <div className="flex flex-col gap-2 md:gap-4 my-4">
                  {UserType.map((user) => (
                    <Button
                      role="button"
                      aria-disabled="false"
                      key={user.id}
                      tabIndex={0}
                      className="overflow-hidden bg-transparent  text-left  py-4 min-h-[80px] duration-200 hover:bg-neutral-secondary  z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100"
                      data-hp-menu="services"
                      data-hp-target="rides"
                    >
                      <div className="flex items-start justify-center space-x-3 w-full">
                        <div>{user.icon}</div>
                        <div className="relative z-10 w-full h-full">
                          <div
                            className="pb-14 md:pb-0 md:pr-26"
                            data-hp-menu="services"
                            data-hp-target="rides"
                          >
                            <h5
                              className="font-semibold overflow-hidden w-[80%] block overflow-ellipsis text-tow-primary mt-0 text-lg md:text-xl mb-2"
                              data-hp-menu="services"
                              data-hp-target="rides"
                            >
                              {user.title}
                            </h5>
                            <span
                              className="inline-block mt-0 text-wrap text-base leading-6 font-normal mb-0 text-secondary max-md:!text-sm"
                              data-hp-menu="services"
                              data-hp-target="rides"
                            >
                              {user.desc}
                            </span>
                          </div>
                        </div>

                        <div>
                          <FaChevronRight />
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
