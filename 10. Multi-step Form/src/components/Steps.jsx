import InputBox from "./ui/InputBox"

/* eslint-disable react/prop-types */
export const StepOne = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 1 : Personal Information
      </h2>

      <InputBox type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      <InputBox type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
    </div>
  )
}

export const StepTwo = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 2 : Contact Information
      </h2>

      <InputBox type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <InputBox type="text" placeholder="Contact number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <InputBox type="text" placeholder="Complete Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
    </div>
  )
}

export const StepThree = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 3 : Review Information
      </h2>
      <p className="mb-2 text-gray-600">
        First Name: <span className="font-semibold">{formData.firstName}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Last Name: <span className="font-semibold">{formData.lastName}</span>
      </p>
      <p className="mb-2 text-gray-600">
        E-mail: <span className="font-semibold">{formData.email}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Contact Number: <span className="font-semibold">{formData.phone}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Address: <span className="font-semibold">{formData.address}</span>
      </p>
    </div>
  )
}