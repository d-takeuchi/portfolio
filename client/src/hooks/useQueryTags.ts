import axios from 'axios'
import { useQuery } from 'react-query'

import { Tag } from '../types/types'

export const useQueryTags = () => {
  const getTags = async () => {
    const { data } = await axios.get<Tag[]>(
      `${process.env.REACT_APP_API_URL}/tags`
    )

    return data
  }
  return useQuery<Tag[], Error>({
    queryKey: 'tags',
    queryFn: getTags,
    staleTime: Infinity,
  })
}