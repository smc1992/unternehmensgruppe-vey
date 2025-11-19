#!/bin/bash

# Create images directory
mkdir -p public/images

echo "Downloading images from readdy.ai..."

# Download company logo (most frequently used)
echo "Downloading company-logo.png..."
curl -L -o "public/images/company-logo.png" "https://static.readdy.ai/image/5cb98375ce345c7331a1619afba21cba/37170a3efcab5dd9b2328e53c4760457.png"

# Download hero background images
echo "Downloading hero images..."
curl -L -o "public/images/hero-background.jpg" "https://readdy.ai/api/search-image?query=Professional%20construction%20and%20forestry%20services%20company%20with%20modern%20equipment%2C%20workers%20in%20safety%20gear%2C%20construction%20machinery%20and%20forestry%20tools%2C%20professional%20service%20company%20background%2C%20industrial%20landscape%20with%20clean%20modern%20aesthetic&width=1920&height=1080&seq=hero-background&orientation=landscape"

curl -L -o "public/images/transport-hero.jpg" "https://readdy.ai/api/search-image?query=Professional%20transport%20and%20logistics%20company%20with%20modern%20delivery%20trucks%20and%20cargo%20vehicles%2C%20transportation%20fleet%20in%20industrial%20setting%2C%20professional%20logistics%20service%20with%20clean%20modern%20trucks%20and%20delivery%20vans&width=1920&height=1080&seq=transport-hero&orientation=landscape"

curl -L -o "public/images/umzuege-hero.jpg" "https://readdy.ai/api/search-image?query=Professional%20moving%20service%20with%20moving%20truck%20and%20workers%20carrying%20furniture%20boxes%20professional%20movers%20in%20uniform%20loading%20household%20items%20into%20modern%20moving%20van%20residential%20area%20background%20clean%20organized%20moving%20process&width=1920&height=1080&seq=umzuege-hero&orientation=landscape"

curl -L -o "public/images/mulch-hero.jpg" "https://readdy.ai/api/search-image?query=Professional%20mulching%20work%20in%20beautiful%20garden%20landscape%20with%20wood%20chips%20and%20organic%20mulch%20being%20spread%20around%20trees%20and%20flower%20beds%20landscaping%20service%20garden%20maintenance%20natural%20mulch%20materials%20clean%20professional%20setup&width=1920&height=1080&seq=mulch-hero&orientation=landscape"

curl -L -o "public/images/dach-hero.jpg" "https://readdy.ai/api/search-image?query=Professional%20roofer%20working%20on%20residential%20house%20roof%20installation%20with%20safety%20equipment%20and%20modern%20roofing%20materials%2C%20skilled%20craftsman%20on%20pitched%20roof%2C%20quality%20roofing%20work%2C%20construction%20industry%20background&width=1920&height=1080&seq=dach-hero&orientation=landscape"

curl -L -o "public/images/maler-hero.jpg" "https://readdy.ai/api/search-image?query=Professional%20house%20painting%20service%20painter%20with%20brush%20and%20paint%20bucket%20painting%20exterior%20wall%20of%20residential%20home%20clean%20professional%20work%20ladder%20and%20painting%20equipment%20fresh%20paint%20finish&width=1920&height=1080&seq=maler-hero&orientation=landscape"

curl -L -o "public/images/hero-schuettgut.jpg" "https://readdy.ai/api/search-image?query=Industrial%20metal%20storage%20containers%20and%20bulk%20material%20boxes%20in%20warehouse%20professional%20storage%20solutions%20for%20wood%20and%20materials%20organized%20storage%20facility%20clean%20modern%20industrial%20setting&width=1920&height=1080&seq=hero-schuettgut&orientation=landscape"

echo "Download complete!"
