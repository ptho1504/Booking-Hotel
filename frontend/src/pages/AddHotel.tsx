import React from 'react'
import ManageFormHotel from '../forms/ManageForm/ManageFormHotel'
import { useAppContext } from '../contexts/AppContext'
import * as apiClient from '../api-client'
import { useMutation } from 'react-query'

const AddHotel = () => {
  const {showToast} = useAppContext()
  const {mutate, isLoading} = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({message: "Hotel Saved!", type:"SUCCESS"})
    },
    onError: () => {
      showToast({message: "Error Saving Hotel", type:"ERROR"})
    }
  })
  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData)
  }
  return (
    <ManageFormHotel onSave={handleSave} isLoading={isLoading}/>
  )
}

export default AddHotel