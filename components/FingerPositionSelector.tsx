import { Listbox } from "@headlessui/react"

export default function FingerPositionSelector({ fingerPosition, setFingerPosition, fingerPositions }) {
    return (
        <div>
            <Listbox value={fingerPosition} onChange={setFingerPosition}>
                <div className="relative w-36">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-600 py-2 pl-2 pr-2 text-left sm:text-sm">
                        <span className="block truncate text-center">{fingerPosition.title}</span>
                        <span className="flex items-center absolute inset-y-0 right-0 pr-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-5 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>

                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-500 py-1 text-base shadow-lg">
                        {fingerPositions.map((position) => (
                            <Listbox.Option
                                key={position.name}
                                value={position}
                                className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-slate-600' : ''}`}
                            >{position.title}</Listbox.Option>
                        ))}
                    </Listbox.Options>

                </div>
            </Listbox>

        </div>
    )
}