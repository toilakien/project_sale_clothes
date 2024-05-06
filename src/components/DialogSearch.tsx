import { Dialog, Transition } from '@headlessui/react';
import { useFormik } from 'formik';
import { Dispatch, Fragment, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { filterByNameCall } from '../store/shop';

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>;
}

export default function DialogSearch({ isOpen, setIsOpen }: Props) {
    const [dataSource, setDataSource] = useState<any>([]);
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
            filterByNameCall({
                params: values?.search,
                callback: (res: any) => {
                    setDataSource(res.data);
                },
            });
        },
    });
    const { handleBlur, handleChange, handleSubmit } = formik;
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/ 25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <StyledForm onSubmit={handleSubmit}>
                                        <input onChange={handleChange} onBlur={handleBlur} name="search" />
                                        <button type="submit">
                                            <CiSearch />
                                        </button>
                                    </StyledForm>
                                    <StyledWrap>
                                        {dataSource.length > 0 &&
                                            dataSource.map((e: any) => {
                                                return (
                                                    <StyledListItem>
                                                        <StyledImage alt="" />
                                                        <StyledNameProduct>{e?.attributes?.name}</StyledNameProduct>
                                                    </StyledListItem>
                                                );
                                            })}
                                    </StyledWrap>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    > input {
        width: calc(100% - 24px);
        padding: 4px 8px;
        border: 1px solid #ddd;
        border-radius: 8px;
        outline: none;
        &:focus {
            outline: 1px solid #a4a2a2;
        }
    }
    > button {
        width: 24px;
        > svg {
            font-size: 24px;
            color: #a4a2a2;
        }
    }
`;
const StyledWrap = styled.div`
    margin-top: 10px;
`;
const StyledListItem = styled.div`
    width: 100%;

    padding: 4px 8px;
`;
const StyledImage = styled.img``;
const StyledNameProduct = styled.h1`
    cursor: pointer;
    color: blue;
    text-decoration: underline;
`;
