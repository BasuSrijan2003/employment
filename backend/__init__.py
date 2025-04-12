# Initialize backend package
from .ai_cv_converter import convert_cv_to_latex  # Using AI version as default
from .cv_converter import convert_cv_to_latex as legacy_convert_cv_to_latex  # Keep legacy available
