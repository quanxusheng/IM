
import { useState } from "react";

import { User } from '@/types/user'

const Contact = () => {


    const contactsList: User[] = [
        {
            id: 1,
            email: '123@qq.com',
            name: '张三'
        },
        {
            id: 2,
            email: '123@qq.com',
            name: '李四'
        },
        {
            id: 3,
            email: '123@qq.com',
            name: '张三22'
        },
        {
            id: 4,
            email: '123@qq.com',
            name: '李四22'
        },
    ]

    const [selectKey, setSelectKey] = useState(contactsList[0].id)
    const handleSelect = (item: User) => {
        setSelectKey(item.id)
    }

    return (
        <div>
            <ul className="menu bg-base-200 w-56 " >
                {
                    contactsList.map(item => {
                        return (
                            <li
                                key={item.id}
                                className="cursor-pointer"
                                onClick={() => handleSelect(item)}
                            >
                                <span
                                    className={`${selectKey === item.id ? 'active' : ''} p-4 hover:bg-base-100 `}
                                >
                                    {item.name}
                                </span>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Contact;
