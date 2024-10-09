import { useState } from "react";
import { StepOne, StepThree, StepTwo } from "./Steps";
import Stepper from "./Stepper";

const FormContainer = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    const steps = [
        {
            label: "Personal Information",
            component: <StepOne formData={formData} setFormData={setFormData} />,
        },
        {
            label: "Contact Information",
            component: <StepTwo formData={formData} setFormData={setFormData} />,
        },
        {
            label: "Review Information",
            component: <StepThree formData={formData} setFormData={setFormData} />,
        }
    ]


    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    return (
        <form className="w-[700px] mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={(e) => e.preventDefault()}>
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="mb-8">{steps[currentStep].component}</div>
            <div className="flex justify-between items-center">
                {currentStep > 0 && (
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={prevStep}
                    >
                        Back
                    </button>
                )}

                {currentStep < steps.length - 1 ? (
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={nextStep}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => {
                            alert("Details Submitted Successfully");
                            window.location.reload();
                        }
                        }
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    )
}

export default FormContainer