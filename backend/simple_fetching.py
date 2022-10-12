import aiohttp
import asyncio

async def main():

    async with aiohttp.ClientSession() as session:
        async with session.get('https://jsonplaceholder.typicode.com/todos/1') as response:
            a = await response.json()
            print(a)
        async with session.get('https://jsonplaceholder.typicode.com/todos/2') as response:
            a = await response.json()
            print(a)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())