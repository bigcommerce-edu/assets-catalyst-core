# Handling Images

### Image example

```javascript
<Image
  src={obj.image.urlTemplate}
  width={500}
  height={500}
/>
```

### Image with sizing

```javascript
<Image
  src={obj.image.urlTemplate}
  width={500}
  height={500}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### WebDAV and Image Manager examples

```javascript
import { contentImageUrl, imageManagerImageUrl } from '~/lib/store-assets';
import { Image } from '~/components/image';

...

{/* Loads a WebDAV content image with dynamic srcset support */}
<Image src={contentImageUrl("myimage.png")} width={500} />

{/* Loads an Image Manager image, but all loaded URLs will use "500w" size */}
<Image src={imageManagerImageUrl("myimage.png", "500w")} width={500} />
```

[Next](../Lab_01_DeployToVercel/Lab_01_DeployToVercel.md)