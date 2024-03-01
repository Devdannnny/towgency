"use client";

import Banner from "@devdanny/components/Widget/Banner";
import Container from "@devdanny/components/sections/Container";
import CDroppy from "@devdanny/components/shared/CDroppy";
import TowInput from "@devdanny/components/shared/TowInput";
import TowSelect from "@devdanny/components/shared/TowSelect";
import { UserType } from "@devdanny/lib/data";
import { signUpFunc } from "@devdanny/types/form";
import { ListDataItemFunc, UserTypeFunc } from "@devdanny/types/shared";
import { signUpSchema } from "@devdanny/utils/auth/signupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import data from "../../../lib/cities.json";

const RegisterLanding = ({ params }: { params: { id: string } }) => {
  const [regionList, setRegionList] = useState<ListDataItemFunc>([]);
  const [cityList, setCityList] = useState<ListDataItemFunc>([]);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [pageData, setPageData] = useState<UserTypeFunc>();
  useEffect(() => {
    const keys = Object.keys(data);
    const result = keys.map((key) => ({ label: key, value: key }));
    setRegionList(result);
  }, [data]);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty, touchedFields },
  } = useForm<signUpFunc>({
    defaultValues: {
      cname: "",
      email: "",
      pnumber: "",
      region: "",
      city: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    if (watch("region") == "") return;
    const newData: any = data;
    const results = newData[watch("region")];
    const result =
      results.length > 0 &&
      results.map((key: any) => ({ label: key, value: key }));
    // console.log(result);
    setCityList(result);
  }, [data, watch("region")]);

  useEffect(() => {
    // console.log(params);
    const result = UserType.find((item) => item.slug == params.id);
    setPageData(result);
  }, [params]);

  const onSubmit: SubmitHandler<signUpFunc> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Banner type={3} data={pageData} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container classNames="md:py-[48px] min-h-[70vh] relative z-[20]">
          <div className="tow-card !absolute md:shadow-lg w-full  md:w-[460px] left-[50%] min-h-[300px] -translate-x-[50%] text-primary pb-6 top:-[20%] md:-top-[25%]">
            <div className="w-full pt-7">
              <div className="mb-[45px]">
                <TowInput
                  label="Company Name"
                  placeholder="Enter Company name"
                  type="text"
                  controlData={control}
                  name="cname"
                  rules={{ required: true }}
                  errors={errors}
                />
              </div>
              <div className="mb-[30px]">
                <TowInput
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name={"email"}
                  controlData={control}
                  rules={{ required: true }}
                  errors={errors}
                />
              </div>
              <div className="mb-[35px]">
                <div className="font-semibold text-[14px] leading-5 mb-2 text-black">
                  Phone number
                </div>
                <div className="flex flex-row space-x-3">
                  <div className="w-[35%]">
                    <CDroppy />
                  </div>
                  <div className="flex-1">
                    <TowInput
                      label="Number"
                      placeholder="Mobile Number"
                      type="tel"
                      name="pnumber"
                      hasLabel={false}
                      controlData={control}
                      rules={{ required: true }}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-[35px]">
                <div className="font-semibold text-[14px] leading-5 mb-2 text-black">
                  Region
                </div>
                <TowSelect
                  listData={regionList}
                  label=""
                  placeholder="Region where you will be operating"
                  name="region"
                  controlData={control}
                  rules={{ required: true }}
                  errors={errors}
                />
              </div>
              <div className="mb-[35px] w-full">
                <div className="font-semibold text-[14px] leading-5 mb-2 text-black">
                  City{" "}
                  <span className="italic opacity-50 font-normal">
                    (You can select more than one city)
                  </span>
                </div>
                <TowSelect
                  listData={cityList}
                  label=""
                  selectionMode="multiple"
                  placeholder="City where you will be operating"
                  name="city"
                  controlData={control}
                  rules={{ required: true }}
                  errors={errors}
                />
              </div>
              <div className="mb-[35px]">
                <Checkbox size="lg" color="primary" classNames={{}}>
                  <div className="mt-0 text-xs font-normal mb-0 text-secondary">
                    By signing up, you agree to our{" "}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-content-promo-primary"
                      href="/en-gh/legal/?category=rides"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-content-promo-primary"
                      href="/en-gh/privacy/?category=rides"
                    >
                      Privacy policy
                    </a>
                    , commit to comply with obligations under the European Union
                    and local legislation and provide only legal services and
                    content on the Bolt Platform.
                  </div>
                </Checkbox>
              </div>
              <div className="py-3">
                <Button
                  color={"default"}
                  variant={"flat"}
                  type="submit"
                  disabled={isSubmitting}
                  className={`text-tow-primary bg-tow-secondary disabled:bg-gray-300 disabled:opacity-70 disabled:cursor-not-allowed py-7 px-9 rounded-[30px] text-lg font-medium w-full`}
                >
                  Sign up as a {pageData?.stitle}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </form>
    </>
  );
};

export default RegisterLanding;
