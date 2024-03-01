import { UserType } from "@devdanny/lib/data";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Signup = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        size="md"
        classNames={{
          body: "z-[333]",
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
                duration: 0.2,
                ease: "easeOut",
              },
            },
            exit: {
              y: -30,
              opacity: 0,
              transition: {
                duration: 0.2,
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
                      as={Link}
                      href={`/register/${user.slug}`}
                      role="button"
                      aria-disabled="false"
                      key={user.id}
                      onClick={onOpenChange}
                      tabIndex={0}
                      className="overflow-hidden bg-transparent text-left py-4 min-h-[80px] duration-200 hover:bg-neutral-secondary  z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100"
                      data-hp-menu="services"
                      data-hp-target="rides"
                    >
                      <div className="flex items-start justify-center space-x-3 w-full">
                        <div>{user.icon}</div>
                        <div className="relative z-10 w-full h-full">
                          <div
                            className="pb-3 md:pb-0 md:pr-26"
                            data-hp-menu="services"
                            data-hp-target="rides"
                          >
                            <h5
                              className="font-semibold w-[80%] block text-tow-primary mt-0 text-lg md:text-xl mb-2"
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

                        <div className="flex items-center justify-center h-[35px]">
                          {/* <FaChevronRight /> */}
                          <FaArrowRightLong />
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
