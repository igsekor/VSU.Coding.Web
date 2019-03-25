import sys


def rewrite_of_file_with(data, dist_file):
    """Rewriting of file with name 'dist_file' by new text from 'data'"""
    with open(dist_file, 'w') as f:
        f.write(data)
    f.close()


def get_wrapped_element(element, wrapper):
    """Getting the wrapped 'element' by 'wrapper' without attributes.
    Example:
        element = 'text'
        wrapper = 'div'
        result = '<div>text</div>'"""

    if sys.version_info[1] < 7:
        return f'<{wrapper}>{element}</{wrapper}>'  # for Python >= 3.7
    else:
        return '<{}>{}</{}>'.format(wrapper, element, wrapper)  # for Python < 3.7


html_code = get_wrapped_element('Hello!', 'title')
file_name = "test.html"

rewrite_of_file_with(html_code, file_name)
