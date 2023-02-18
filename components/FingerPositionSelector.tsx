import { Listbox } from "@headlessui/react"
import { fingerPositions } from "../lib/fingerpositions"
import { IFingerPosition } from "./Timer"

export default function FingerPositionSelector({ fingerPosition, handleFingerPosition, index}: {fingerPosition: IFingerPosition, handleFingerPosition: Function, index: number}) {
    return (
        <div className="flex justify-center text-sm">
            <Listbox value={fingerPosition} onChange={(value) => handleFingerPosition(value, index)}>
                <div className="relative">
                    <Listbox.Button className="relative w-24 cursor-default rounded-lg bg-slate-800 py-2 md:pl-2 md:pr-2 sm:text-sm">
                        <span className="block truncate text-center">{fingerPosition?.title}</span>
                        {/* <span className="xs:hidden md:flex items-center absolute inset-y-0 right-0 pr-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-5 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span> */}

                    </Listbox.Button>
                    <Listbox.Options className="absolute max-h-60 w-36 overflow-auto rounded-md bg-slate-500 py-1 text-base shadow-lg">
                        {fingerPositions.map((position) => (
                            <Listbox.Option
                                key={position.name}
                                value={position}
                                className={({ active }) => `relative cursor-default select-none py-1 pl-10 pr-2 ${active ? 'bg-slate-600' : ''}`}
                            >{position.title}</Listbox.Option>
                        ))}
                    </Listbox.Options>

                </div>
            </Listbox>

        </div>
    )
}