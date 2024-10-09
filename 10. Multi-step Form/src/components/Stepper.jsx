/* eslint-disable react/prop-types */
const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map((step, idx) => (
        <div
        className={`relative flex-1 text-center ${idx===currentStep?"text-blue-500":(idx>currentStep?"text-gray-400":"text-green-500")}`}
        key={idx}>
          <div className={`h-12 w-12  ${idx===currentStep?"bg-blue-500":(idx>currentStep?"bg-gray-200":"bg-green-500")} rounded-full flex items-center justify-center mb-2 mx-auto`}>
            <span className={idx>currentStep?"text-gray-500":"text-white"}>{idx+1}</span>
            </div>
          <p className="text-sm">{step.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stepper