import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modalRef = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
    
        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === ""){
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Okay"> 
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Please make sure you provide appropriate input in each field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:bg-stone-950">
                    Cancel
                </button></li>
                <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
                    Save
                </button></li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title"/>
                <Input ref={descriptionRef} label="Description" textarea={true}/>
                <Input type="date" ref={dueDateRef} label="Due Date" />
            </div>
        </div>
        </>
    );
}