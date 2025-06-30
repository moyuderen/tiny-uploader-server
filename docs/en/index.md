---
layout: doc
outline: deep
---

## Local mock api request

```bash
# 启动sever
pnpm run start:debug
```

```js
const BASE_URL = 'http://localhost:3000/file';
```

## Remote mock api request

```js
const BASE_URL = 'https://tiny-uploader-server.vercel.app/file';
```

## Usage

### `check`

```js {1}
axios.get(`${BASE_URL}/check`, {
  params: {
    hash: 'xxxx-xxxx-xxxx',
    filename: 'xxx.png',
    status: 'none', // none, part, waitMerge, success
  },
});
```

::: info Response1：

```json
{
  "code": "00000",
  "statusCode": 200,
  "message": "success",
  "data": {
    "filename": "xxxx-xxxx-xxxx",
    "hash": "xxx.png",
    "status": "none",
    "data": false
  }
}
```

:::

::: details Response2： file check status is `part`

```json
{
  "code": "00000",
  "statusCode": 200,
  "message": "success",
  "data": {
    "filename": "xxxx-xxxx-xxxx",
    "hash": "xxx.png",
    "status": "part",
    "data": [0, 2, 4, 6, 8, 10] // already uploaded chunk index, starting from 0
  }
}
```

:::

::: details Response3： file check status is `waitMerge`

```json
{
  "code": "00000",
  "statusCode": 200,
  "message": "success",
  "data": {
    "filename": "xxxx-xxxx-xxxx",
    "hash": "xxx.png",
    "status": "waitMerge",
    "data": ""
  }
}
```

:::

::: details Response3： file check status is `success`

```json
{
  "code": "00000",
  "statusCode": 200,
  "message": "success",
  "data": {
    "filename": "xxxx-xxxx-xxxx",
    "hash": "xxx.png",
    "status": "success",
    "data": "https://baidu.com"
  }
}
```

:::

::: details When http status code `500`

```json
{
  "statusCode": 500,
  "message": "/file/check mock error !",
  "data": null
}
```

:::

::: details When response code `00003`

```json
{
  "code": "00003",
  "statusCode": 200,
  "message": "mock error",
  "data": null
}
```

:::

### `upload`

```js {10}
const data = {
  hash: 'xxxx-xxxx-xxxx',
  filename: 'xxx.png',
  index: 2,
  file: binary,
};
const formData = new FormData();
Object.entries(data).forEach(([key, value]) => formData.append(key, value));

axios.post(`${BASE_URL}/upload`, { data: formData });
```

::: info Response

```json
{
  "code": "00000",
  "statusCode": 201,
  "message": "success",
  "data": {
    "filename": "xxx.png",
    "hash": "xxxx-xxxx-xxxx",
    "index": "2"
  }
}
```

:::

::: details When http status code `500`

```json
{
  "statusCode": 500,
  "message": "/file/upload mock error !",
  "data": null
}
```

:::

::: details When response code `00003`

```json
{
  "code": "00003",
  "statusCode": 200,
  "message": "mock error",
  "data": null
}
```

:::

### `merge`

```js {1}
axios.get(`${BASE_URL}/merge`, {
  params: {
    hash: 'xxxx-xxxx-xxxx',
    filename: 'xxx.png',
  },
});
```

::: info Response

```json
{
  "code": "00000",
  "statusCode": 200,
  "message": "success",
  "data": "http://localhost:3000/static/xxx.png"
}
```

:::

::: details When http status code `500`

```json
{
  "statusCode": 500,
  "message": "/file/merge mock error !",
  "data": null
}
```

:::

::: details When response code `00003`

```json
{
  "code": "00003",
  "statusCode": 200,
  "message": "mock error",
  "data": null
}
```

:::

## Mock interface exception

> [!TIP]
> Add the following two parameters in the interface parameters to mock the interface.

### status_error

When there is a value, it mock the return interface error and returns the `Http Status Code` as `500`; the correct return is `200`

### code_error

When there is a value, it mock the return interface error and returns the `Http Status Code` as `200`; the correct return result code is `"00000"`, and the error code is `"00003"`
