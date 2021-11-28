import { FC } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // eslint-disable-next-line no-console
  const onSubmit = data => console.log(data)
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-sm rounded-md shadow-md p-8"
    >
      <input {...register('firstName', { required: true })} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('message')} />
      <input type="submit" />
      <Button
        className="block mx-auto mt-6"
        buttonStyle="secondary"
        type="submit"
      >
        Odeslat
      </Button>
    </motion.form>
  )
}
export default Form
