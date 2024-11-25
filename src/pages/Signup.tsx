import Back from '@/assets/images/header/back.svg?react';
import { FirstStep, SecondStep } from '@/components/signup';

import { useFadeNavigate, useSignupForm } from '@/hooks';
import { useCallback, useState } from 'react';

export default function Signup() {
    const navigate = useFadeNavigate();
    const {
        emailValidation,
        verificationCodeValidation,
        passwordValidation,
        confirmPasswordValidation,
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        trigger,
        isValid,
    } = useSignupForm();

    const [pageNumber, setPageNumber] = useState(1);

    const handleBackBtn = useCallback(() => {
        if (pageNumber === 1) {
            navigate('/login');
        } else {
            setPageNumber((prev) => prev - 1);
        }
    }, [pageNumber]);

    return (
        <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
            <header className="bg-white sm:h-24 h-14 w-full flex items-center justify-center">
                <Back
                    onClick={handleBackBtn}
                    className="absolute left-[26px] cursor-pointer"
                />
                <h1 className="text-point-900 text-body-l font-extrabold">
                    회원가입
                </h1>
            </header>
            <form
                id="signup-form"
                onSubmit={handleSubmit(onSubmit)}
                className="h-full flex-1 flex flex-col justify-between"
            >
                <FirstStep
                    pageNumber={pageNumber}
                    register={register}
                    watch={watch}
                    emailValidation={emailValidation}
                    verificationCodeValidation={verificationCodeValidation}
                    errors={errors}
                    trigger={trigger}
                    isValid={isValid}
                    setPageNumber={setPageNumber}
                />
                <SecondStep
                    pageNumber={pageNumber}
                    register={register}
                    watch={watch}
                    passwordValidation={passwordValidation}
                    confirmPasswordValidation={confirmPasswordValidation}
                    errors={errors}
                    setPageNumber={setPageNumber}
                />
            </form>
        </div>
    );
}
