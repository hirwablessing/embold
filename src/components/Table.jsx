import React from 'react'
import {users} from "../utils/users"
import EditIcon from '@material-ui/icons/Edit';

function Table() {
    return (
<div className="flex flex-col mt-7">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="border overflow-hidden border-b border-gray-300 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user =>(
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
              
                    <td className="text-sm font-medium text-gray-900 capitalize">
                      {user.name}
                    </td>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap capitalize">
                {user.role}
                </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <EditIcon/>
              </td>

            </tr>

              ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
}

export default Table
