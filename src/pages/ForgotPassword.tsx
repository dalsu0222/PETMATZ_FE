import { useFadeNavigate, useForgotPasswordForm } from '@/hooks';
import { useCallback } from 'react';
import Back from '@/assets/images/header/back.svg?react';
import { CustomInput, Loading, ToastAnchor } from '@/components/common';
import { Success } from '@/components/forgot-password';

export default function ForgotPassword() {
    const navigate = useFadeNavigate();
    const {
        emailValidation,
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        isValid,
        success,
        loading,
    } = useForgotPasswordForm();

    const handleBackBtn = useCallback(() => {
        navigate('/login');
    }, []);

    return (
        <>
            {loading && <Loading />}
            <div
                className={`${loading && 'hidden'} h-screen ${success ? 'bg-white' : 'bg-gray-100'} flex flex-col justify-between overflow-hidden`}
            >
                <header className="bg-white h-14 w-full flex items-center justify-center">
                    <Back
                        onClick={handleBackBtn}
                        className="absolute left-[26px] cursor-pointer"
                    />
                    <h1 className="text-point-900 text-body-l font-extrabold">
                        비밀번호 재발급
                    </h1>
                </header>
                {!success ? (
                    <>
                        <section className="flex-1 flex flex-col justify-start">
                            <div className="bg-white pt-6 pb-12 flex flex-col">
                                <div className="w-full max-w-[600px] px-6 mx-auto">
                                    <div className="text-title-s font-extrabold text-gray-800 pb-12">
                                        <p>임시 비밀번호를</p>
                                        <p>이메일로 보내드릴게요!</p>
                                    </div>
                                    <form
                                        id="forgot-form"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <CustomInput
                                            id="email"
                                            label="이메일"
                                            type="text"
                                            placeholder="이메일을 입력해주세요."
                                            register={register}
                                            watch={watch}
                                            validation={emailValidation}
                                            error={errors.email?.message}
                                            design="outline"
                                            successMsg="좋아요!"
                                        />
                                    </form>
                                </div>
                            </div>
                        </section>
                        <footer className="w-full max-w-[600px] px-6 py-2.5 mx-auto">
                            <ToastAnchor>
                                <button
                                    type="submit"
                                    form="forgot-form"
                                    className="btn-solid"
                                    disabled={!isValid || !!errors.email}
                                >
                                    확인
                                </button>
                            </ToastAnchor>
                        </footer>
                    </>
                ) : (
                    <Success />
                )}
            </div>
        </>
    );
}
