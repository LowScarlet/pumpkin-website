from aiohttp import web

async def handler(request):
    return web.Response(text="Hello world")

app = web.Application()
app.add_routes([web.get('/', handler)])

web.run_app(app, port=9000)