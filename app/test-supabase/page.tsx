import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  try {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)

    const { data: todos, error } = await supabase.from('todos').select()

    if (error) {
      return (
        <div>
          <h1>Supabase Test</h1>
          <p>Error: {error.message}</p>
          <p>This might be because Supabase environment variables are not configured.</p>
        </div>
      )
    }

    return (
      <div>
        <h1>Supabase Test</h1>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  } catch (error) {
    return (
      <div>
        <h1>Supabase Test</h1>
        <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        <p>This might be because Supabase environment variables are not configured.</p>
      </div>
    )
  }
}
