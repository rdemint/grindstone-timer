import { Listbox } from "@headlessui/react"

export default function FingerPositionSelector({ fingerPosition, setFingerPosition, fingerPositions }) {
    return (
        <div>
            <Listbox value={fingerPosition} onChange={setFingerPosition}>
                <div className="relative w-36">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-600 py-2 pl-2 pr-2 text-left sm:text-sm">
                        <span className="block truncate">{fingerPosition.title}</span>
                        </Listbox.Button>
                    <Listbox.Options>
                        {fingerPositions.map((position) => (
                            <Listbox.Option key={position.name} value={position}>{position.title}</Listbox.Option>
                        ))}
                    </Listbox.Options>

                </div>
            </Listbox>

        </div>
    )
}