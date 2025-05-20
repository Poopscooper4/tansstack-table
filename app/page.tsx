import React from 'react'
import MocData from "@/features/table/constats/data.json"
import Table from '@/features/table/components/Table'

const Home = () => {
  return (
    <div>
      <Table initialData={MocData} />
    </div>
  )
}

export default Home